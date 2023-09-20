import { ReactNode } from "react";
import './DefinationItem.css'

interface Props{
    term: string;
    children: ReactNode| ReactNode[];

}

const DefinationItem = ({term, children }:Props) => {
  return (
    <div className="platform-detail">
        <dd>{term}</dd>
        <dt>{children}</dt>
    </div>
  )
}

export default DefinationItem