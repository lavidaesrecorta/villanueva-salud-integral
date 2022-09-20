export interface IAtNavigationRoute {
  title: string,
  path: string,
  subroutes?: IAtNavigationRoute[],
}

const AtNavigationRoute: React.FC<IAtNavigationRoute> = ({title,path,subroutes}) => {
  return (
    <div className="block lg:inline-block p-4 lg:mx-2 text-center lg:text-right lg:align-top">
      <a className="hover:underline hover:cursor-pointer">{title}</a>
      <ul>
        {subroutes?.map((route) => {
          return (
            <li key={route.path}>
              <a className="text-sm hover:underline hover:cursor-pointer">{route.title}</a>
            </li>
        )}
      )}
      </ul>
    </div>
  );
};

export default AtNavigationRoute;