import { useTheme } from 'next-themes'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 " >
      <div className="m-auto text-black dark:text-white bg-white dark:bg-gray-800 px-10 py-10 rounded-lg shadow-lg " >
      <h1 className="text-4xl font-bold" >Welcome to the <span className="text-blue-600" >template </span> </h1>
      <p>This template has the following setup:</p>
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Typescript</li>
        <li>Cypress</li>
        <li>Jest</li>
        <li>Dark mode</li>
        <button
        className="w-full text-white font-bold bg-blue-600 rounded-md py-1 
        transition duration-500 ease-in-out hover:bg-purple-600
        "
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >Chame theme</button>
      </div>
      
    </div>
  )
}
