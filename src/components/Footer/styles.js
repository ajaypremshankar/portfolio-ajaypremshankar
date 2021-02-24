import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full`};

  a {
    ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-indigo-900 hover:text-indigo-600 mx-2`};
`;

export const LightLinks = styled.div`
  ${tw`text-gray-400 text-sm flex items-center justify-center w-full`};

  a {
    ${tw`text-gray-500 text-sm items-end hover:text-gray-600 mx-2`};
  }
`;

export const LightLink = styled.a`
  ${tw`text-gray-300 text-sm items-end hover:text-gray-600 mx-2`};
`;
