import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Laís dos Santos',
                    avatar: 'https://i.pravatar.cc/150?img=1'
                },
                date: '07 Mar 2019',
                content:
                    'Pessoal, estou fazendo um teste de post! Vocês conseguem ver tudo certinho?',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'José Augusto Torres',
                            avatar: 'https://i.pravatar.cc/150?img=7'
                        },
                        content:
                            'Opa, está perfeito! Você pode ler este comentário aqui?'
                    },
                    {
                        id: 1,
                        author: {
                            name: 'Fábio Almeida Castro',
                            avatar: 'https://i.pravatar.cc/150?img=3'
                        },
                        content:
                            'Olha, vou comentar aqui um post bem grande com palavras que ainda fazem sentido para fazer um teste com um comentário maior. Depois disso aqui com certeza os próximos posts vão ser gerados a partir do Lorem Ipsum.'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Sandra Belloto',
                    avatar: 'https://i.pravatar.cc/150?img=20'
                },
                date: '09 Ago 2019',
                content:
                    'Fala galera, beleza? Lá vem o Lorem Ipsum! Elit tristique fermentum leo auctor velit duis mattis, commodo laoreet ad a at diam magna, ipsum justo augue curabitur euismod nec. faucibus mattis est lacus ad etiam blandit, himenaeos posuere taciti netus fermentum quam libero, duis in elementum maecenas viverra. id ullamcorper consequat sagittis pulvinar ac donec eget ipsum, venenatis sodales ac magna at accumsan sed duis porttitor, morbi rhoncus integer varius sociosqu ornare donec. hendrerit integer tempor consequat facilisis ligula quisque ac, sodales nisi mauris augue bibendum commodo, cubilia et sem felis odio lectus. pulvinar curabitur nullam dolor nam pharetra, eget sollicitudin suspendisse egestas varius, nullam nibh maecenas porta. ',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Vinícius Costa',
                            avatar: 'https://i.pravatar.cc/150?img=4'
                        },
                        content: 'Maravilhoso! Nunca vi tanta criatividade!'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Caio Alemida',
                            avatar: 'https://i.pravatar.cc/150?img=11'
                        },
                        content:
                            'Eu também nunca vi tanta criatividade. Saca esse meu comentário que é igual ao de cima!'
                    },
                    {
                        id: 3,
                        author: {
                            name: 'José Luz',
                            avatar: 'https://i.pravatar.cc/150?img=2'
                        },
                        content:
                            'Comentário apra fazer volume. Esse texto que ser um pouco maior e já dou spoiler que os posts/comentários que vierem daqui pra baixo vão ser tudo igual, beleza?'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Sandra Belloto',
                    avatar: 'https://i.pravatar.cc/150?img=20'
                },
                date: '09 Ago 2019',
                content:
                    'Fala galera, beleza? Lá vem o Lorem Ipsum! Elit tristique fermentum leo auctor velit duis mattis, commodo laoreet ad a at diam magna, ipsum justo augue curabitur euismod nec. faucibus mattis est lacus ad etiam blandit, himenaeos posuere taciti netus fermentum quam libero, duis in elementum maecenas viverra. id ullamcorper consequat sagittis pulvinar ac donec eget ipsum, venenatis sodales ac magna at accumsan sed duis porttitor, morbi rhoncus integer varius sociosqu ornare donec. hendrerit integer tempor consequat facilisis ligula quisque ac, sodales nisi mauris augue bibendum commodo, cubilia et sem felis odio lectus. pulvinar curabitur nullam dolor nam pharetra, eget sollicitudin suspendisse egestas varius, nullam nibh maecenas porta. ',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Vinícius Costa',
                            avatar: 'https://i.pravatar.cc/150?img=4'
                        },
                        content: 'Maravilhoso! Nunca vi tanta criatividade!'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Caio Alemida',
                            avatar: 'https://i.pravatar.cc/150?img=11'
                        },
                        content:
                            'Eu também nunca vi tanta criatividade. Saca esse meu comentário que é igual ao de cima!'
                    },
                    {
                        id: 3,
                        author: {
                            name: 'José Luz',
                            avatar: 'https://i.pravatar.cc/150?img=2'
                        },
                        content:
                            'Comentário apra fazer volume. Esse texto que ser um pouco maior e já dou spoiler que os posts/comentários que vierem daqui pra baixo vão ser tudo igual, beleza?'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Sandra Belloto',
                    avatar: 'https://i.pravatar.cc/150?img=20'
                },
                date: '09 Ago 2019',
                content:
                    'Fala galera, beleza? Lá vem o Lorem Ipsum! Elit tristique fermentum leo auctor velit duis mattis, commodo laoreet ad a at diam magna, ipsum justo augue curabitur euismod nec. faucibus mattis est lacus ad etiam blandit, himenaeos posuere taciti netus fermentum quam libero, duis in elementum maecenas viverra. id ullamcorper consequat sagittis pulvinar ac donec eget ipsum, venenatis sodales ac magna at accumsan sed duis porttitor, morbi rhoncus integer varius sociosqu ornare donec. hendrerit integer tempor consequat facilisis ligula quisque ac, sodales nisi mauris augue bibendum commodo, cubilia et sem felis odio lectus. pulvinar curabitur nullam dolor nam pharetra, eget sollicitudin suspendisse egestas varius, nullam nibh maecenas porta. ',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Vinícius Costa',
                            avatar: 'https://i.pravatar.cc/150?img=4'
                        },
                        content: 'Maravilhoso! Nunca vi tanta criatividade!'
                    },
                    {
                        id: 2,
                        author: {
                            name: 'Caio Alemida',
                            avatar: 'https://i.pravatar.cc/150?img=11'
                        },
                        content:
                            'Eu também nunca vi tanta criatividade. Saca esse meu comentário que é igual ao de cima!'
                    },
                    {
                        id: 3,
                        author: {
                            name: 'José Luz',
                            avatar: 'https://i.pravatar.cc/150?img=2'
                        },
                        content:
                            'Comentário para fazer volume. Esse texto é pra ser um pouco maior e já dou spoiler que os posts/comentários que vierem daqui pra baixo vão ser tudo igual, beleza?'
                    }
                ]
            },
        ]
    };

    render() {
        return (
            <div className='postlist'>
                {this.state.posts.map(post => (
                    <Post key={post.id} data={post} />
                ))}
            </div>
        );
    }
}

export default PostList;
