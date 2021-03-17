const updateState = (name: string, data: any, setData: any, state: boolean) => {
  setData({
    ...data,
    [name]: state,
  })
}

export const isInputFocus = (event: React.ChangeEvent<HTMLInputElement>, data: any, setData: any, focus: boolean) => {
  const { target } = event
  const { name, value } = target

  if (focus || value) {
    updateState(name, data, setData, true)
  } else {
    updateState(name, data, setData, false)
  }
}
