import React, {Component} from "react";
import moment from "moment";

export default class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      searchParams: {},
      searching: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      searchParams: {
        topic: this.refs.topic.value,
        startDate: this.refs.startYear.value
          ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format('YYYYMMDD')}`
          : "",
        endDate: this.refs.endYear.value
          ? `&end_date=${moment(new Date(this.refs.endYear.value)).format('YYYYMMDD')}`
          : "",
        limit: this.refs.numOfRecords.value
          ? this.refs.numOfRecords.value
          : 10

      }
    }, function() {
      this.props.newQuery(this.state); 
      this.setState({
        searching: true
      }, () => setTimeout(() => this.setState({searching: null}), 1200));
    });
  }

  render() {
    return (<React.Fragment>
      <div className="col s12 m12 l6">
        <div className="card-panel">
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <label for="topic">Article Keywords</label>
                  <input type="text" ref="topic" id="topic" required="required" className="validate"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">view_headline</i>
                  <select id="numOfRecords" ref="numOfRecords">
                    <option value="" disabled="disabled" selected="selected">How many articles would you like returned?</option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">calendar_today</i>
                  <label for="startYear">Date Start (optional)</label>
                  <input type="text" ref="startYear" className="datepicker" id="startYear"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">calendar_today</i>
                  <label for="endYear">Date End (Optional)</label>
                  <input type="date" ref="endYear" className="datepicker" id="endYear"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  {
                    this.state.searching
                      ? (<div className="preloader-wrapper big active right" style={{
                          background: "none"
                        }}>
                        <div className="spinner-layer spinner-blue">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-red">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-yellow">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-green">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>)
                      : (<button className="btn #b71c1c red darken-4 waves-effect waves-light right" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                        <p class="z-depth-5"></p>
                      </button>)
                  }
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

    </React.Fragment>); 
  } 
} 