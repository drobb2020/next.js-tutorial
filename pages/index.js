import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eos nobis vel rem quia! Perspiciatis illum amet fuga, enim maxime ipsum nesciunt fugit eveniet fugiat impedit consequuntur tempora labore beatae.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quisquam quidem! Consequuntur velit exercitationem ducimus voluptates quam ipsam tenetur iure, cum voluptas atque optio vero necessitatibus aliquid provident eius maxime.</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
    </div>
  )
}
