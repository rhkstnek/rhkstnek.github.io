import { configureStore, createSlice, current } from '@reduxjs/toolkit';
import { useRef, useState } from "react"

let count = 4;
// console.log(count)
let num = new Date();

let user = createSlice({
  name: 'user',
  initialState: 'happy',
  reducers: {
    함수1() {
      return 'sad';
    }
  }
})

let kim = createSlice({
  name: 'll',
  initialState: [0, 1, 2].join(),
  reducers: {
    car(star, action) {
      return star = [0, 0, 0].join()
    }
  }
})

let board = createSlice({
  name: '게시판',
  initialState: [
    // selId = 0,
    { id: 1, tit: '안녕하세요?', day: '2023-08-09' },
    { id: 2, tit: '반갑습니다!~', day: '2023-11-26' },
    { id: 3, tit: '등업신청부탁...', day: '2024-03-07' },

  ],
  reducers: {

    삽입(abc, action) {
      abc.push({
        id: count++, tit: action.payload, day:
          `${num.getFullYear()}-0${num.getMonth() + 1}-${num.getDate()}`
      })
    },
    moveDel(state, action) {
      // console.log(action.payload)
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === Number(action.payload) ){
          state.splice(i, 1)
          console.log(action.payload)
          // console.log(state[i].id)
        }

      }
    },
  }
})

export default configureStore({
  reducer: {
    user: user.reducer,
    kim: kim.reducer,
    board: board.reducer,
    // 킴은 : 킴의 데이터
  }
})

export let { 함수1 } = user.actions
export let { car } = kim.actions
export let { 삽입, moveDel } = board.actions