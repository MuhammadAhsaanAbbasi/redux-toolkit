"use client";
import { useEffect, useState } from "react";
import Addtodo from "./lib/todos/Addtodo";
import Todos from "./lib/todos/Todos";
import { ThemeProvider } from "./component/themeContent/Themecontent";
import ThemeBtn from "./component/themebtn/themebtn";

const Home = () => {
    const [themeMode, setthemeMode] = useState("light")
  const lightMode=()=>{
    setthemeMode("light")
  }
  const darkMode=()=>{
    setthemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector("html")?.classList.remove("light","dark")
    document.querySelector("html")?.classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <ThemeProvider value={{ themeMode, lightMode, darkMode }} >
      <div className="block m-auto bg-slate-200 py-6 my-4 w-5/12 rounded-xl dark:bg-black transition-all duration-500">
        <div className="flex items-center justify-between flex-row mx-5">
            <h2 className="px-8 text-4xl font-semibold text-zinc-700 dark:text-white">Todo List</h2>
            <div className="flex justify-start mx-4">
              <ThemeBtn />
            </div>
        </div>
        <Addtodo />
        <Todos />
      </div>
      </ThemeProvider>

    </>
  );
};

export default Home;

// const Home = () => {
//   const {push, back, } = useRouter()
//   const isLoggIn = true
//   const handleRedirect = () =>{
//     if(isLoggIn){
//       push('/dashboard')
//     }else{
//       push('/login')
//     }
//   }
//   return(
//     <main>
//       <button onClick={handleRedirect} className='p-4 m-4 bg-blue-500'>
//         Dashboard
//       </button>
//     </main>
//   )
// }

// export default Home

// Context Api Todo App

// const [todos,setTodos] = useState<any>([])

// const addTodo =(todo:any)=>{
//   setTodos((prevTodo:any)=>[{id:Math.floor(Math.random()*9999999999),...todo},...prevTodo])
// }

// const UpdateTodo = (id:number,todo:any) =>{
//   setTodos((prev:any)=>prev.map((prevTodo:any)=>(prevTodo.id===id?todo:prevTodo)))
// }

// const DeleteTodo = (id:number) =>{
//   setTodos((prev:any)=>prev.filter((Todo:any)=>(Todo.id!==id)))
// }

// const toggleComplete = (id:number) =>{
//   setTodos((prev:any)=>prev.map((prevTodo:any)=>(prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)))
// }

// useEffect(()=>{
//   const storedData = localStorage.getItem("todos");
//   const todos = storedData ? JSON.parse(storedData) : [];
//   if(todos&&todos.length>0){
//     setTodos(todos)
//   }
// },[])

// useEffect(()=>{
//   (localStorage.setItem("todos",JSON.stringify(todos)))
//   if(todos&&todos.length>0){
//     setTodos(todos)
//   }
// },[todos])

// return (
//   <TodoProvider value={{todos,addTodo,UpdateTodo,DeleteTodo,toggleComplete}}>
//     <div className="bg-[#172842] min-h-screen py-8">
//               <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                   <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                   <div className="mb-4">
//                       {/* Todo form goes here */}
//                       <TodoForm/>
//                   </div>
//                   <div className="flex flex-wrap gap-y-3">
//                       {/*Loop and Add TodoItem here */}
//                       {todos.map((todo:any)=>(
//                         <div key={todo.id}>
//                           <TodoItem todo={todo}/>
//                         </div>
//                       ))}
//                   </div>
//               </div>
//           </div>
//   </TodoProvider>
// )

// export default function Home() {
//   const [themeMode, setthemeMode] = useState("light")
//   const lightMode=()=>{
//     setthemeMode("light")
//   }
//   const darkMode=()=>{
//     setthemeMode("dark")
//   }
//   useEffect(()=>{
//     document.querySelector("html")?.classList.remove("light","dark")
//     document.querySelector("html")?.classList.add(themeMode)
//   },[themeMode])
//   return (
//     <ThemeProvider value={{themeMode,lightMode,darkMode}}>
//           <div className="flex flex-wrap min-h-screen items-center">
//       <div className="w-full">
//         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//           <ThemeBtn/>
//         </div>
//         <div className="w-full max-w-sm mx-auto">
//           <Cardui/>
//         </div>
//       </div>
//     </div>
//     </ThemeProvider>

//   )
// }
// import ThemeBtn from './component/themebtn'
// import Cardui from './component/cardui'
// import { ThemeProvider } from './component/themecontent'
// import { TodoProvider } from './component/todocontent/todocontent'
// import TodoForm from './component/todocontent/todoform'
// import TodoItem from './component/todocontent/todoItem'
// import { useRouter } from 'next/navigation'
