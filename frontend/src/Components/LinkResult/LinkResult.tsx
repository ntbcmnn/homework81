import { useAppSelector } from '../../app/hooks.ts';
import { selectLink, selectLoading } from '../../store/slices/linksSlice.ts';
import Loader from '../UI/Loader/Loader.tsx';
import { api_URL } from '../../globalConst.ts';

const LinkResult = () => {
  const link = useAppSelector(selectLink);
  const isLoading = useAppSelector(selectLoading);

  return (
    link && (
      <>
        {isLoading ? (
          <Loader/>
        ) : (
          <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
            <h4 className="m-0 p-0">Your link now looks like this:</h4>
            <a
              href={`${api_URL}/links/${link.shortUrl}`}
              target="_blank"
              className="text-decoration-none"
            >
              {`${api_URL}/${link.shortUrl}`}
            </a>
          </div>
        )}
      </>
    )
  );
};

export default LinkResult;