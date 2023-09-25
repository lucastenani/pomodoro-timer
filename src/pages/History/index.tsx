import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { CyclesContext } from '../../contexts/CyclesContext'

import { HistoryContainer, HistoryHeader, HistoryList, Status } from './styles'

export function History() {
  const { cycles, cleanCyclesHistory } = useContext(CyclesContext)

  function handleCleanCyclesHistory() {
    cleanCyclesHistory()
  }

  return (
    <HistoryContainer>
      <HistoryHeader>
        <h1>My history</h1>
        <button
          onClick={handleCleanCyclesHistory}
          disabled={cycles.length === 0}
          title="Clear cycle history"
        >
          Clear cycle history
        </button>
      </HistoryHeader>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluded</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
