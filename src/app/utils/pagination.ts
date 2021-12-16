export const pag = (page:number, total:number) => {
  
  const totalPages = Math.ceil(total / 10);

  const res = {
    first: false,
    prev: false,
    next: true,
    last: true,
    idx:[1,2,3],
    totalPages
  };
  
  res.first = (page === 1);
  res.prev = (page === 1);
  res.next = (page === totalPages);
  res.last = (page === totalPages);
  res.idx = page + 3 >= totalPages
            ? [totalPages - 2, totalPages - 1, totalPages]
            : [page + 1, page + 2, page + 3]

  return res;

}