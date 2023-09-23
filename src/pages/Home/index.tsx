import { useContext } from 'react'
import { HandPalm, Play } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { CreateCycleData, CyclesContext } from '../../contexts/CyclesContext'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  InterruptCountdownButton,
  StartCountdownButton,
} from './styles'

export function Home() {
  const { createNewCycle, activeCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<CreateCycleData>({
    defaultValues: { task: '', minutesAmount: 0 },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: CreateCycleData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const minutesAmountInput = watch('minutesAmount')
  const isSubmitDisabled = !task || !minutesAmountInput

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <InterruptCountdownButton
            type="button"
            title="Interrupt the active Task."
            onClick={interruptCurrentCycle}
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
