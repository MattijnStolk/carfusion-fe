import Link from "next/link"
import Image from "next/image"

import "./header.scss" 

import accountIMG from './user.png'

export function Header () {
    return(
        <header>
            <Link href={"/"} >home</Link>
            <Link href={"/events"} >events</Link>
            <Link id="nav-account" href={"account"} >
                <Image 
                    src={accountIMG} 
                    alt="Image Icon"
                    width={30}
                    height={30}
                ></Image>
            </Link>
        </header>
    )
}

export default Header