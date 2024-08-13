import React, { useState } from "react";

function Header(props) {
  return (
    <header style={{textAlign:'center'}}>
      <h4><a href='/' onClick={(e) => {
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h4>
    </header>
  )
}

function Nav(props) {
  return (
    <nav>
      <ol>
        {
          props.topics.map((a, i) => {
            return (
              <li key={i} > <a id={props.topics[i].id} href={`/read/${i}`}
                onClick={(e) => {
                  e.preventDefault()
                  props.onChangeMode(Number(e.target.id))
                }}
              >{props.topics[i].title} </a>
              </li>
            )
          })
        }
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h5>{props.title}</h5>
      <p>{props.body}</p>
    </article>
  )
}

function Create(props) {
  return (
    <article >
      <h6>생성하다</h6>
      <form onSubmit={ee => {
        ee.preventDefault()
        const title = ee.target.title.value;
        const body = ee.target.body.value;
        props.onCreate(title, body);
        console.log(title, '+', body)
      }}>
        <p><input name='title' placeholder='제목' /></p>
        <p><textarea name='body' placeholder='내용' /></p>
        <p><input type='submit' value='추가' onClick={(ev) => { }} /><span><input onClick={() => { props.setMode('read') }} type='button' value='취소' /></span></p>
      </form>

    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)

  return (
    <article >
      <h6>수정하다</h6>
      <form onSubmit={ee => {
        ee.preventDefault()
        const title = ee.target.title.value;
        const body = ee.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input name='title' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} /></p>
        <p><textarea name='body' value={body} onChange={(e) => {
          setBody(e.target.value)
        }} />
        </p>
        <p><input type='submit' value='변경' /><span><input onClick={() => { props.setMode('read') }} type='button' value='취소' /></span></p>
      </form>
    </article>
  )
}

function Crud() {
  const [mode, setMode] = useState('welcome') // 모드
  const [id, setId] = useState(null) // (a의 id)와 배열 id값 매칭할때
  const [nextId, setNextId] = useState(9)

  const [topics, setTopics] = useState([
    { id: 1, title: '숙성카레 고형', body: '1큐브' },
    { id: 2, title: '물', body: '200ml' },
    { id: 3, title: '다진마늘', body: '1/2ts' },
    { id: 4, title: '양파', body: '1개' },
    { id: 5, title: '다진 돼지고기', body: '100g' },
    { id: 6, title: '고춧가루', body: '1/4ts' },
    { id: 7, title: '토마토케챂', body: '1/4ts' },
    { id: 8, title: '후추', body: '약간' }
  ])
  let content = null;
  let subtn = null;

  if (mode == 'welcome') {
    content = <Article title='키마카레 만들기' body='시작~' />
  } else if (mode == 'read') {
    let title, body = null
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id == id) {
        title = topics[i].title;
        body = topics[i].body
      }
    }
    content = <Article title={title} body={body} />;

    subtn = <a style={{ margin: '0 15px' }} href={`/update/${id} `} onClick={(e) => {
      e.preventDefault();
      setMode('update');
    }}>재료 변경</a>





  } else if (mode == 'create') {
    content = <Create setMode={setMode} onCreate={(_title, _body) => {
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics([...newTopics])
      setMode('read')
      setId(nextId)
      setNextId(nextId + 1)
    }}
    />
  } else if (mode == 'update') {

    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id == id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} setMode={setMode}
      onUpdate={(title, body) => {
        console.log(title, body);
        const newTopics = [...topics]
        const updatedTopic = { id: id, title: title, body: body }
        for (let i = 0; i < newTopics.length; i++) {
          if (newTopics[i].id === id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics)
        setMode('read')
      }}
    />
  }

  return (
    <div className="crud_box">
      <Header title="요리 레시피" onChangeMode={() => {
        setMode('welcome')

      }} />

      
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('read')
        setId(_id)
      }}
      />
      {content}
      <div style={{ display: 'flex', justifyContent:'center' }}>
        <a href="/create" onClick={(event) => {
          event.preventDefault();
          setMode('create')
        }}>재료 추가</a><br />
        {subtn}
        {
          mode == 'read' ?

            <a href='/delete' onClick={(e) => {
              e.preventDefault();
              const box = [];
              for (let i = 0; i < topics.length; i++) {
                if (topics[i].id !== id) {
                  box.push(topics[i])
                }
              }
              setTopics(...[box])
              setMode('welcome')
            }}

            >재료 빼기</a>
            : ''

        }
      </div>
    </div>
  )
}

export default Crud