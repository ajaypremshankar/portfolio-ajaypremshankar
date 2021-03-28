import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Title = styled.h3`
  ${tw`font-semibold mb-4`};
`;

export const Description = styled.p``;

export const Date = styled.h3`
  ${tw`text-xs text-blue-700`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto break-normal m-0.5 `}
`;

export const Tag = styled.span`
  ${tw`text-xs break-normal	text-indigo-900 border m-0.5 border-blue-700 rounded-full px-2 py-1 mr-2`}
`;
