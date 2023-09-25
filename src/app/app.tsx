import { Main } from '../main/main';

type AppProps = {
  promoName: string;
  promoGenre: string;
  promoDate: string;
};

export const App: React.FunctionComponent<AppProps> = ({
  promoName,
  promoGenre,
  promoDate,
}: AppProps) => (
  <Main promoName={promoName} promoGenre={promoGenre} promoDate={promoDate} />
);
