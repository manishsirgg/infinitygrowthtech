export const getGrowthAdvice = async (goal: string) => {
  const response = await fetch("/api/advisor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ goal }),
  });

  const data = await response.json();
  return data.advice;
};
