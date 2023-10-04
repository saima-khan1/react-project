import './BreadCrumb.css';
interface BreadCrumbProps{
    items:{label:string; link?:string}[];
}

const BreadCrumb = ({items}:BreadCrumbProps) => {
  return (
 <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        {items.map((item,index)=>(
        <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active': ''}`}>
          {item.link ? <a href={item.link}>{item.label}</a> : <span>{item.label}</span>}
          {index < items.length - 1 && <span className="separator">/</span>} 
        </li>))}

    </ol>
 </nav>
  )
}

export default BreadCrumb