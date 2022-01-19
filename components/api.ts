const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export interface IUser {
  id: number;
  name: string;
}

export async function getUsers(): Promise<Array<IUser>> {
  await wait(1000);

  return [
    {
      id: 1,
      name: 'john',
    },
    {
      id: 2,
      name: 'juan',
    },
    {
      id: 3,
      name: 'snow',
    },
    {
      id: 4,
      name: 'nieve',
    },
  ];
}
