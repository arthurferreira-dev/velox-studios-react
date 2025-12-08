export const useNavigator = () => {
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return { navigateTo };
};