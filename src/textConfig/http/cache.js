export default [
`$$一般客户端存在两种缓存方式，分为强缓存和协商缓存`,
`h3$$强缓存`,
`$$强服务器通知浏览器一个缓存时间，在缓存时间内的请求都会使用缓存，不在时间内则执行比较缓存策略，强缓存有Cache-control和Expire.
Expire是Http1.0的标椎，cache-control是Http1.1的标椎，较为常用，并且比Expire的优先级高
`,
`$$Cache-control的一些属性`,
`markdown$$ 1. __public__: 所有的内容都将被缓存（客户端和服务端）
 2. __private__: 所有内容只有客户端可以缓存（默认值）
 3. __no-cache__: 客户端缓存内容， 但是否使用缓存由协商缓存来验证决定
 4. __no-store__: 所有内容不会被缓存，即使不用强制也不会使用协商缓存
 5. __max-age=xxx__: 缓存将在xxx秒后失效
 `,
`$$frome memory是使用内存中的缓存,关闭网页就会失效属于session级别， from disk是使用硬盘中的缓存，读取顺序为memory->disk`,
`h3$$协商缓存`,
`$$协商缓存是由服务器来确定缓存资源是否可用。 主要涉及到两对属性字段，都是成对出现的，即第一次请求的响应头带上某个字, Last-Modified 或者 Etag，
则后续请求则会带上对应的请求字段 If-Modified-Since或者 If-None-Match，若响应头没有 Last-Modified 或者 Etag 字段，则请求头也不会有对应的字段
Etag要比Last-Modifed的优先级高`,
`markdown$$ 1. __Last-Modified/If-Modified-Since__: 二者的值都是 GMT 格式的时间字符串， Last-Modified 标记最后文件修改时间， 
下一次请求时，请求头中会带上 If-Modified-Since 值就是 Last-Modified 告诉服务器我本地缓存的文件最后修改的时间，
在服务器上根据文件的最后修改时间判断资源是否有变化， 如果文件没有变更则返回 304 Not Modified ，请求不会返回资源内容，
浏览器直接使用本地缓存。当服务器返回 304 Not Modified 的响应时，response header 中不会再添加的 Last-Modified 去试图更新本地缓存的 Last-Modified， 
因为既然资源没有变化，那么 Last-Modified 也就不会改变；如果资源有变化，就正常返回返回资源内容，新的 Last-Modified 会在 response header 返回，
并在下次请求之前更新本地缓存的 Last-Modified，下次请求时，If-Modified-Since会启用更新后的 Last-Modified
 2. __Etag/If-None-Matc__: 值都是由服务器为每一个资源生成的唯一标识串，只要资源有变化就这个值就会改变。服务器根据文件本身算出一个哈希值并通过 ETag字段返回给浏览器，接收到 If-None-Match 字段以后，服务器通过比较两者是否一致来判定文件内容是否被改变。与 Last-Modified 不一样的是，当服务器返回 304 Not Modified 的响应时，由于在服务器上ETag 重新计算过，response header中还会把这个 ETag 返回，即使这个 ETag 跟之前的没有变化`,
`$$Etag和Last-Modified的不同`,
`markdown$$ * 一些文件也许会周期性的更改，但是内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新 GET；
 * 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说 1s 内修改了 N 次)，If-Modified-Since 能检查到的粒度是秒级的，使用 Etag 就能够保证这种需求下客户端在 1 秒内能刷新 N 次 cache。
 * 某些服务器不能精确的得到文件的最后修改时间`,
`$$优先级`,
`markdown$$ ![优先级](https://image-static.segmentfault.com/182/088/1820889386-b466186611e08f3b)`,
]