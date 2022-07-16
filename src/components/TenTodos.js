import React from 'react';
import {useDispatch} from 'react-redux';
import {extendTodo}from '../reducers/actions';
import 'bootstrap/dist/css/bootstrap.css';

function TenTodos() {
	let dispatch=useDispatch();
  return (
<div>
<br/>
<hr/>
<div className="text-center" style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
<h3>For 10 Extra Spaces !!</h3>
				<button 
					onClick={()=>
					{
						dispatch(extendTodo(
						));
					}}
				className="btn btn-primary  mx-0"><strong>CLICK HERE</strong></button>
				
				<hr/></div></div>
  );
}

export default TenTodos;
