let users = [
  { bio: null, email: 'user@domain.com', firstName: 'Carl' },
  { bio: null, email: 'user@domain.com', firstName: 'Bob' },
  { bio: null, email: 'user@domain.com', firstName: 'Anna' },
];

users.sort(function (a, b) {
  let nameA = a.firstName.toLowerCase();
  let nameB = b.firstName.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(users);
