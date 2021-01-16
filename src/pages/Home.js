import React from 'react'
import Header from "../components/navigation/header/Header";

export default function Home(props){
    return <h2>
        <Header
            className="page-header"
            name={props.headerName}
            type="text"
            />
    </h2>

}