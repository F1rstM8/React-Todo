

export const isOverdue = (deadline, isDone) => {
  if (!deadline || isDone) return false;
  return new Date(deadline) < new Date().setHours(0, 0, 0, 0);
};