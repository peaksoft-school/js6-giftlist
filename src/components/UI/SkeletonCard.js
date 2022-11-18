import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function SkeletonCard() {
   return (
      <Stack spasing={1} width="317px" height="149px">
         <Skeleton
            variant="restangular"
            width={317}
            height={149}
            style={{ borderRadius: '6px' }}
         />
      </Stack>
   )
}

export default SkeletonCard
