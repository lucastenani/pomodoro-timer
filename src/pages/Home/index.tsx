import { createContext, useState } from 'react'
import { HandPalm, Play } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { NewCycleForm, NewCycleFormData } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  InterruptCountdownButton,
  StartCountdownButton,
} from './styles'

interface Cycle extends NewCycleFormData {
  id: string
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: { task: '', minutesAmount: 0 },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
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
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

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

  const task = watch('task')
  const minutesAmountInput = watch('minutesAmount')
  const isSubmitDisabled = !task || !minutesAmountInput

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            setSecondsPassed,
            amountSecondsPassed,
          }}
        >
          {activeCycle ? (
            <h1>{activeCycle.task}</h1>
          ) : (
            <FormProvider {...newCycleForm}>
              <NewCycleForm />
            </FormProvider>
          )}

          <Countdown />
        </CyclesContext.Provider>

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
