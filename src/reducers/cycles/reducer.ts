import { produce } from 'immer'
import { CreateCycleData } from '../../contexts/CyclesContext'
import { ActionTypes } from './actions'

export interface Cycle extends CreateCycleData {
  id: string
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  const currentCycleIndex = state.cycles.findIndex((c) => {
    return c.id === state.activeCycleId
  })

  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.unshift(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    case ActionTypes.CLEAN_CYCLES_HISTORY:
      return produce(state, (draft) => {
        draft.cycles = []
        draft.activeCycleId = null
      })

    default:
      return state
  }
}
