interface Props{
    score:number
}

const CriticScore = ({score}:Props) => {
    let color = score > 75 ? '#39b039a3' : score > 60 ? 'yellow' : '';

  const style = {
    backgroundColor: color,
  };
  return (
 <div style={style} className="score-badge">{score}</div>
  )
}

export default CriticScore