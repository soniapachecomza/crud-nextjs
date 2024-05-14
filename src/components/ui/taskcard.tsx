import React from 'react'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import clsx from 'clsx'
import { Task } from '@prisma/client'

export default function TaskCard({ task }: { task: Task }) {
    return (
        <Card>
            <CardHeader className='bg-cyan-400 flex flex-row justify-between'>
                <CardTitle>{task.name}</CardTitle>
                <Badge className={
                    clsx({
                        "bg-red-600 text-white": task.priority === "high",
                        "bg-green-600 text-white": task.priority === "low",
                        "bg-yellow-500 text-white": task.priority === "medium",
                        "bg-indigo-500 text-white": task.priority === "urgent"
                    })
                }>
                    {task.priority}
                </Badge>
            </CardHeader>
            <CardContent>
                <p>
                    {task.description}
                </p>
                <span className='text-yellow-500'>
                    {new Date(task.createdAt).toLocaleDateString()}
                </span>
            </CardContent>
            <CardFooter className='flex gap-x-2 justify-center'>
                <Button variant="destructive">
                    Delete
                </Button>
                <Button>
                    Edit
                </Button>
            </CardFooter>
        </Card>
    )
}
