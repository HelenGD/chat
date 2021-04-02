import { bindActionCreators } from 'redux'
import { useMemo } from 'react'
import { useAppDispatch } from '../../store/store'


export const useActions = <A extends Parameters<typeof bindActionCreators>[0]>(
  actions: A, 
) => {
  const dispatch = useAppDispatch()
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, ...Object.values(actions)],
  )
};
