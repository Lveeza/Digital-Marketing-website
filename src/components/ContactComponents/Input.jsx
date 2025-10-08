export default function Input({
  error,
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="relative flex h-20 laptop:h-24 laptop:w-[30%] w-full flex-col">
      <input
        className="px-3 py-4 text-black shadow-lg focus:outline-[#ff7070]/60"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className="absolute bottom-0 text-sm font-medium text-[#212529]">
          {error}
        </p>
      )}
    </div>
  )
}
