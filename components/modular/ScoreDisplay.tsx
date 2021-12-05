import dynamic from 'next/dynamic'

const ScoreDisplay = ({ score }: { score: number }) => {
  return (
    <span sx={{ ml: 5, px: 8, py: 5, bg: 'accent', borderRadius: 'default' }} >
      {score}
    </span>
  )
}

export default dynamic(() => Promise.resolve(ScoreDisplay), { ssr: false })