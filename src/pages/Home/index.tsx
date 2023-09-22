import { useEffect, useState } from 'react'
import { HandPalm, Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InterruptCountdownButton,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface Cycle extends NewCycleFormData {
  id: string
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    defaultValues: { task: '', minutesAmount: 0 },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDiff >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
          setActiveCycleId(null)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDiff)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [newCycle, ...state])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    document.title = activeCycle
      ? `${minutes}:${seconds} - ${activeCycle?.task}`
      : 'Pomodoro Timer'
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const minutesAmountInput = watch('minutesAmount')
  const isSubmitDisabled = !task || !minutesAmountInput

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        {activeCycle ? (
          <h1>{activeCycle.task}</h1>
        ) : (
          <FormContainer>
            <label htmlFor="task">I will work on</label>

            <TaskInput
              type="text"
              id="task"
              placeholder="Give a name to your project."
              list="task-suggestions"
              {...register('task')}
            />

            <datalist id="task-suggestions">
              <option value="Project 1" />
              <option value="Project 2" />
              <option value="Project 3" />
              <option value="Project 4" />
            </datalist>

            <label htmlFor="minutesAmount">for</label>

            <MinutesAmountInput
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={60}
              {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutes.</span>
          </FormContainer>
        )}

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <InterruptCountdownButton
            type="button"
            title="Interrupt the active Task."
            onClick={handleInterruptCycle}
          >
            <HandPalm size={24} /> Interrupt
          </InterruptCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            title="Fill in the name and duration before starting."
            disabled={isSubmitDisabled}
          >
            <Play size={24} /> Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
