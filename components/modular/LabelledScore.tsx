import Flex from 'components/modular/Flex'
import dynamic from 'next/dynamic'

const LabelledScore = ({ label, score }: { label: string, score: number }) => {
  return (
    <Flex center asSpan>
      {label}
      <span sx={{ ml: 5, px: 8, py: 5, bg: 'accent', borderRadius: 'default' }} >
        {score}
      </span>
    </Flex>

  )
}

export default dynamic(() => Promise.resolve(LabelledScore), { ssr: false })