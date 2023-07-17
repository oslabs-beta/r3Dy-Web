import React, {ReactNode} from 'react'

type CalloutProps = {
    children?: ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="bg-slate-200 p-4 text-slate-900 rounded-md my-8 dark:bg-slate-500 dark:text-white">
        { children }
    </div>
  )
}
