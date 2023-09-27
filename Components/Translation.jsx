import Slider from "./Slider";
function Translation() {
    const images = ['/book1.jpeg', '/book2.jpeg', '/book3.jpeg'];
    return (
        <section className="translation">
            <div className="translation-container">
                <div className="translation-left">
                    <h2>Translation </h2>
                    <p>
                        I have a wealth of experience in the field of literary translation, <br />
                        including the translation of numerous books from Arabic to English <br />
                        and vice versa. My dedication to the craft has resulted in the successful <br />
                        publication of several acclaimed works, expanding the reach of these <br />
                        literary treasures to a wider audience. My translations are known for <br />
                        their ability to capture the essence and intricacies of literary works <br />
                        while preserving the unique voice and narrative style of  the original  <br />
                        authors. His portfolio encompasses a diverse range of genres, including <br />
                        fiction, non-fiction, poetry, and academic texts, making each translation <br />
                        a labor of passion and a bridge between cultures.

                    </p>
                </div>
                <div className="translation-right">
                    <Slider
                        images={images}
                        height={300}
                        width={220}
                        borderRadius='2%' />
                </div>
            </div>
        </section>
    );
}
export default Translation;
