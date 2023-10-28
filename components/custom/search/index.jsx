import React, { useState, useEffect } from 'react';
import { UsePerson } from '@/context/personagens';
// import { BiSearch } from 'react-icons/bi';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import style from './style.module.css';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [info, setInfo] = useState([]);
    const { setPerson } = UsePerson();
    const { push } = useRouter();

    useEffect(() => {
        const SearchReult = async () => {
            try {
                const res = await axios.get("/api");
                let filteredData = res.data;
                if (searchTerm) {
                    filteredData = res.data.filter((item) =>
                        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
                    );
                }
                setInfo(filteredData);
            } catch (error) {
                console.log('erro', error);
            }
        };
        SearchReult();
    }, [searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const pers = (i) => { setPerson([i]), push(`/personagens/${i.slug}`)};

    return (
        <section className={style['s-container']}>
            <InputMask className={style['s-input']} value={searchTerm} onChange={handleSearch} placeholder={'Buscar por personagem'} />
            {searchTerm && (
                <div className={style['s-results']}>
                    {info.slice(0, 3).map((item) => (
                        <button className={style['s-card']} key={item.id} onClick={() => pers(item)}>
                            <Image className={style['s-card-img']} src={item.images.lg} width={250} height={150} alt={item.name} />
                            <div className={style['s-card-info']}>
                                <h5>{item.name}</h5>
                                <p>{item.work.occupation}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
            {/* {!searchTerm && (
                <div className={style['s-results']}>
                    <BiSearch className={style['s-alert']} />
                </div>
            )} */}
        </section>
    );
};

export default Search;