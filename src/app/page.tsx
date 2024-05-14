import React from 'react'

import prisma from '@/lib/prisma'
import TaskCard from '@/components/ui/taskcard'

export default async function Homepage() {
  const tasks = await prisma.task.findMany()
  console.log(tasks)
  return (
    
    <div className="grid grid-cols-3 gap-4">
      {tasks.map(task =>(
        <TaskCard task={task } key={task.id}/>
      ))}
    </div>
  )
}


