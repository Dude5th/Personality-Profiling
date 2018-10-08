import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
      loading: true
    };

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });
  }

  static renderForecastsTable(forecasts) {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Temp. (°C)</Table.HeaderCell>
            <Table.HeaderCell>Temp. (°F)</Table.HeaderCell>
            <Table.HeaderCell>Summary</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {forecasts.map(forecast =>
            {
              if (forecast.summary === "Warm" || forecast.summary === "Hot" || forecast.summary === "Scorching") {
                return (
                  <Table.Row key={forecast.dateFormatted} negative>
                    <Table.Cell>{forecast.dateFormatted}</Table.Cell>
                    <Table.Cell>{forecast.temperatureC}</Table.Cell>
                    <Table.Cell>{forecast.temperatureF}</Table.Cell>
                    <Table.Cell>{forecast.summary}</Table.Cell>
                  </Table.Row>
                );
              }
              else if (forecast.summary === "Chilly" || forecast.summary === "Freezing" ) {
                return (
                  <Table.Row key={forecast.dateFormatted} positive>
                    <Table.Cell>{forecast.dateFormatted}</Table.Cell>
                    <Table.Cell>{forecast.temperatureC}</Table.Cell>
                    <Table.Cell>{forecast.temperatureF}</Table.Cell>
                    <Table.Cell>{forecast.summary}</Table.Cell>
                  </Table.Row>
                );
              }
              else {
                return (
                  <Table.Row key={forecast.dateFormatted}>
                    <Table.Cell>{forecast.dateFormatted}</Table.Cell>
                    <Table.Cell>{forecast.temperatureC}</Table.Cell>
                    <Table.Cell>{forecast.temperatureF}</Table.Cell>
                    <Table.Cell>{forecast.summary}</Table.Cell>
                  </Table.Row>
                );
              }
            }
          )}
        </Table.Body>
      </Table>
      // <table className='table'>
      //   <thead>
      //     <tr>
      //       <th>Date</th>
      //       <th>Temp. (C)</th>
      //       <th>Temp. (F)</th>
      //       <th>Summary</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {forecasts.map(forecast =>
      //       <tr key={forecast.dateFormatted}>
      //         <td>{forecast.dateFormatted}</td>
      //         <td>{forecast.temperatureC}</td>
      //         <td>{forecast.temperatureF}</td>
      //         <td>{forecast.summary}</td>
      //       </tr>
      //     )}
      //   </tbody>
      // </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
