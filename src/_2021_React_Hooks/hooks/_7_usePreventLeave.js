export function usePreventLeave() {
    const listener = (evt) => {
        evt.preventDefault();
        evt.returnValue = "";
    }

    const enablePrevent = () =>window.addEventListener(("beforeunload"), listener)
    const disablePrevent = () =>window.removeEventListener(("beforeunload"), listener)

    return {enablePrevent, disablePrevent};
}