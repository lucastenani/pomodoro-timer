import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  CLEAN_CYCLES_HISTORY = 'CLEAN_CYCLES_HISTORY',
}

export function addNewCycleAction(newCycle: Cycle) {
  return { type: ActionTypes.ADD_NEW_CYCLE, payload: { newCycle } }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function cleanCyclesHistoryAction() {
  return {
    type: ActionTypes.CLEAN_CYCLES_HISTORY,
  }
}
