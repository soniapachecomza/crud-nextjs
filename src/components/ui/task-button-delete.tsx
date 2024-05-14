import React from 'react'
import { Button } from './button'
import { removeTask } from '@/actions/tasks-actions';

export default function TaskButtonDelete({taskId}:{taskId:number}) {

    return (
        <form action={ removeTask}>
            <input type="hidden" name="taskId" value={taskId}/>
            <Button variant="destructive">
                Delete
            </Button>
        </form>

    )
}
