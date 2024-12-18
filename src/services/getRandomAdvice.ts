export const getAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    const data = await fetch(url);
    const response = await data.json();
    return response.slip
  };