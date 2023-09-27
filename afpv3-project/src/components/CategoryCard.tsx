interface propsType {
    name: string;
    count: string;
}

const CategoryCard: React.FC<propsType> = ({name, count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{name}</h3>
                <p className="text-gray-500">{count}</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard