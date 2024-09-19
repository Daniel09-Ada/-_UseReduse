import React, { useReducer } from 'react'
import styled from 'styled-components'

const UserStyled = styled.div`
    /* border: 2px solid; */
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    >div{
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      display: flex;
      width: 350px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
    }
    >div > h1{
        border: 2px solid;
        padding: 10px;
    }
`
const UserDivInTheDiv = styled.div`
    border: 2px solid;
    font-size: 1rem;
`



const reducer = (state , action) => {
    // console.log(action);
    if(action.type === "CHANGE_NAME"){
        return {
            name: state.name = action.payload,
            age: state.age
        }
    }
    if(action.type === "ADD"){
        return {
            name: state.name,
            age: state.age + 1
        }
    }
    if(action.type === "MINUS"){
        return {
            name: state.name,
            age: state.age - 1
        }
    }
    
}

const User = () => {

    const [data , DistpatchData] = useReducer(reducer , {
        age: 15,
        name: "Asan"
    })

    const dataChangeHandler = (e) => {
        DistpatchData({type: "CHANGE_NAME" , payload: e.target.value})
    }

    const dataAgeChangeHandler = () => {
        DistpatchData({type: "ADD"})
    }

    const dataAgeChangeHandler2 = () => {
        DistpatchData({type: "MINUS"})
    }
    


  return (
    <UserStyled>
      <input onChange={dataChangeHandler} value={data.name} placeholder='user-name' />
      <div>
      <h1>{data.name}</h1>
        <UserDivInTheDiv>
      <button onClick={dataAgeChangeHandler} >+ age</button> : {data.age} : <button onClick={dataAgeChangeHandler2} >- age</button>
        </UserDivInTheDiv>
      </div>
    </UserStyled>
  )
}

export default User;