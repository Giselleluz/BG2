import './App.css'
import Titulo from './components/Titulo';
import Card from './components/Card';
import Descricao from './components/Descricao';
import Image from './components/Image';


function App() {
  const produtos =
  [
  {
  "id": 1,
  "title": "King Costela",
  "description": "Hamburger fabricado pelo Burger King.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/The-King_King-Costela_Externa_Novo.png?mtime=20240620132633&focal=none"
  },
  {
  "id": 2,
  "title": "Whopper Bacon ",
  "description": "Descrição detalhada do produto 2.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/whopper-catupiry-thumb-novo.png?mtime=20240206234258&focal=none"
  },
  {
    "id": 3,
    "title": "Rodeio Duplo",
    "description": "Descrição detalhada do produto 3.",
    "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/rodeio-duplo-thumb_2021-09-16-135740_wani.png?mtime=20210916135741&focal=none"
  },
  {
  "id": 4,
  "title": "Whopper",
  "description": "Descrição detalhada do produto 4.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/whopper-thumb.png?mtime=20210916125149&focal=none"
  },
  {
  
  "id": 5,
  "title": "Big King",
  "description": "Descrição detalhada do produto 5.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/big-king-thumb.png?mtime=20210916134350&focal=none"
  },
  {
  "id": 6,
  "title": "Whopper Jr.",
  "description": "Descrição detalhada do produto 6.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/whopper_jr.png?mtime=20231010141029&focal=none"
  },
  {
  "id": 7,
  "title": "Whopper Jr. Duplo",
  "description": "Descrição detalhada do produto 7.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/whopper_jr_duplo.png?mtime=20231010141120&focal=none"
  },
  {
  "id": 8,
  "title": "Chicken Duplo",
  "description": "Descrição detalhada do produto 16.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/chicken-duplo-thumb.png?mtime=20210916143308&focal=none"
  },
  {
  "id": 9,
  "title": "Balde de Brownie",
  "description": "Descrição detalhada do produto 9.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Balde-Brownie_Externa.png?mtime=20240604170533&focal=none"
  
  },
  {
  "id": 10,
  "title": "Shake de Baunilha",
  "description": "Descrição detalhada do produto 10.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Baunilha_Externa.png?mtime=20240604103843&focal=none"
  },
  {
  "id": 11,
  "title": "Shake de Chocolate",
  "description": "Descrição detalhada do produto 11.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Chocolate_Externa.png?mtime=20240604104016&focal=none"
  },
  {
  "id": 12,
  "title": "Shake de Morango",
  "description": "Descrição detalhada do produto 12.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Nova-Embalagem_Shake-Morango_Externa.png?mtime=20240604104134&focal=none"
  },
  {
  "id": 13,
  "title": "Sundae de Ovomaltine",
  "description": "Descrição detalhada do produto 13.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Tag-Ovomaltine_Sundae_Externa.png?mtime=20240610165317&focal=none"
  },
  {
  "id": 14,
  "title": "BK Chicken",
  "description": "Descrição detalhada do produto 14.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/BK-Chicken-2.png?mtime=20221202153255&focal=none"
  },
  {
  "id": 15,
  "title": "Onion Rings",
  "description": "Descrição detalhada do produto 15.",
  "imageUrl": "https://d3sn2rlrwxy0ce.cloudfront.net/Onion-Rings-thumb_2021-09-16-164850_zyvn.png?mtime=20210916164851&focal=none"
  },
  ]
  return (
    <>
      <body>
      <Titulo corDoTitulo='red' tamanhoTitulo= '64px'>Cardápio Burger King</Titulo>
      
      <div class='container'>
      {
        produtos.map((produto) => (
          <Card>
          <Titulo>{produto.title}</Titulo>
          <Descricao> {produto.description}</Descricao>
          <Image src= {produto.imageUrl}/>
        </Card>
        ))
       }
      </div>
        
      
      </body>
      
    </>  
  )
}

export default App
