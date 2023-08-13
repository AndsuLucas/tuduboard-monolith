type NewWindowParams = {
  uri: string,
  title: string,
  width: number,
  height: number
}

export const renderNewWindow = (params: NewWindowParams) => {
  let top = window.screen.height - params.height;
  top = top > 0 ? top / 2 : 0;

  let left = window.screen.width - params.width;
  left = left > 0 ? left / 2 : 0;

  const newWindow = window.open(
    params.uri,
    params.title,
    `width=${params.width},height=${params.height}`
    + ",top=" + top + ",left=" + left
  );

  const isValidWindow = newWindow instanceof Window;
  if (!isValidWindow) {
    return;
  }

  newWindow.moveTo(left, top);
  newWindow.focus();
}
