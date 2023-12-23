import Carousel from "@/components/carousel/Carousel";
import DropDownMenu from "@/components/common/drop_down_menu/DropDown";
import CategoryHeader from "@/components/common/headers/CategoryHeader";
import MovieCover from "@/components/movie_cover/MovieCover";
import MovieGenres from "@/components/movies_category/movies_genre/MovieGenres";
import MovieLists from "@/components/movies_category/movies_genre/MovieLists";
import React from "react";

const Start: React.FC = () => {
  const test = () => {};
  const dummy = [
    {
      tagId: "3d38094e-1faa-4f79-ab67-d1690a1a064b",
      listName: "AFI",
      description:
        "Lista stu najlepszych filmów wg American Film Institute, była kilkukrotnie aktualizowana, znajdziesz tu pierwsze 100 oraz filmy, które wypadły z pierwszej setki po aktualizacjach. Lista prezentuje amerykańskie (lub współprodukowane, przez USA) filmy, które wyróżniły się olbrzymią populanrością, artyzmem, pionierskimi technikami filmowymi, znaczeniem historycznym lub spowodowały ważną debatę społeczną. Na liście są filmy, które może nie wytrzymują porównania z późniejszym kinem, ale stanowią dokumentację rozwoju amerykańskiego kina, życia i relacji społecznych czasów o których opowiadają.",
    },
    {
      tagId: "44393984-90a8-47ad-8de4-02a42af126ec",
      listName: "100Na100",
      description:
        "Cykl filmów prezentowany przez Telewizję Polską w 1995 z okazji setnej rocznicy powstania kinematografii. Lista zawiera ważne z punktu widzenia rozwoju kina produkcje z całego świata (głównie filmy francuskie, niemieckie, włoskie, brytyjskie, rosyjskie, amerykańskie i japońskie",
    },
    {
      tagId: "12efca30-ada6-4fde-b80d-861c042e582c",
      listName: "KK45",
      description:
        "Lista 45 filmów ogłoszona z okazji stulecia kina przez Papieską Radę ds. Środków Społecznego Przekazu. Lista zawiera po 15 filmów prezentujące szczeólne walory: religijne, moralne i artystyczne.",
    },
    {
      tagId: "faae80c3-b10c-407f-add6-4e67602e6cb3",
      listName: "Pełna_sala",
      description:
        "Lista stu najlepszych filmów wg redaktorów portalu pelnasala.pl, która jak zaznaczają jej twórcy, stanowi alternatywę dla wielu popularnych rankingów",
    },
    {
      tagId: "19aa1ec0-8753-4097-b72f-60c17b2ab272",
      listName: "FAV",
      description:
        "Lista filmów, które nie znajdują się w innych zestawieniach, ale wg nas swoją błyskotliwością, ciepłem, oryginalnym scenariuszem, poczuciem humoru albo tym, że są po prostu kultowe, zasługują na wyróżnienie. Jednym słowem takie, które obejrzysz z czystą przyjemnością.",
    },
    {
      tagId: "71e23db4-6a75-4f18-a996-f2030644c4b6",
      listName: "Pełna_sala_PL",
      description: null,
    },
  ];

  const movies = [
    {
      id: 1073,
      title: "Ziemia obiecana ",
      year: 1974,
      thumbnail: "https://fwcdn.pl/fpo/10/73/1073/7998093.3.jpg",
    },
    {
      id: 1158,
      title: "Krótki film o miłości ",
      year: 1988,
      thumbnail: "https://fwcdn.pl/fpo/11/58/1158/7879818.3.jpg",
    },
    {
      id: 4830,
      title: "Człowiek na torze ",
      year: 1956,
      thumbnail: "https://fwcdn.pl/fpo/48/30/4830/7182176.3.jpg",
    },
  ];
  return (
    <>
      <Carousel />
    </>
  );
};

export default Start;
