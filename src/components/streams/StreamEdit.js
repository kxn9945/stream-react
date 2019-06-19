//Refactor to StreamForm
// import React from 'react';
// import { connect } from 'react-redux';
// import { fetchStream, editStream } from '../../actions';
//
// class StreamEdit extends React.Component{
//   componentDidMount(){
//     this.props.fetchStream(this.props.match.params.id);
//   }
//
//   render() {
//     if(!this.props.stream){
//       return <div>Loading</div>
//     }
//     return (
//     <div>{this.props.stream.title}</div>
//   )
//   }
// };
//
// const mapStateToProps = (state, ownProps) => {
//   return {stream: state.streams[ownProps.match.params.id] };
// }
//
// export default connect(mapStateToProps, {fetchStream})(StreamEdit);

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if(!this.props.stream){
      return <div>Loading</div>
    }
    return (
    <div>
      <h3>Editing Stream</h3>
      <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
    </div>
  )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
