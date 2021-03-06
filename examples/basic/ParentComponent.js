import React, { Component } from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      format: 'YYYY-MM-DD',
      inputFormat: 'YYYY-MM-DD',
      mode: 'date',
      startOfWeek: 'week',
      availableDates: [new Date(Date.parse('2019-03-16T00:00:00Z')), new Date(Date.parse('2019-03-23T00:00:00Z'))]
    };
  }

  handleChange = newDate => {
    return this.setState({ date: newDate });
  };

  render() {
    const minimalDate = moment('01.01.2017', 'DD.MM.YYYY');
    const { date, format, mode, inputFormat, startOfWeek, availableDates } = this.state;
    return (
      <DateTimeField
        dateTime={date}
        format={format}
        minDate={minimalDate}
        inputFormat={inputFormat}
        onChange={this.handleChange}
        viewMode={mode}
        startOfWeek={startOfWeek}
        availableDates={availableDates}
      />
    );
  }
}
module.exports = ParentComponent;
