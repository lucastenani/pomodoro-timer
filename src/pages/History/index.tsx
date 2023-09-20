import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

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
            <tr>
              <td>Technical Debt Resolution.</td>
              <td>25 minutes</td>
              <td>About 2 months ago</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Technical Debt Resolution.</td>
              <td>25 minutes</td>
              <td>About 2 months ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Technical Debt Resolution.</td>
              <td>25 minutes</td>
              <td>About 2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
