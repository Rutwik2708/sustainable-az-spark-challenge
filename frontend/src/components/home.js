import ForceDirectedGraph from "./ForceDirectedGraph";

import React from 'react'


export default function home( {username, password} ) {
  return (
    <ForceDirectedGraph username={username} password = {password} />
  )
}
